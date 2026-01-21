let state = {
    tweets: [],
    keywordPacks: [
        { id: 1, name: "Corporate Jargon", keywords: ["synergy", "circle back", "low-hanging fruit", "move the needle", "paradigm shift"] },
        { id: 2, name: "Tech Twitter", keywords: ["React", "TypeScript", "JavaScript", "CSS", "frontend"] },
        { id: 3, name: "Startup Life", keywords: ["founder", "startup", "SaaS", "product-market fit", "MVP"] },
        { id: 4, name: "AI/ML", keywords: ["AI", "machine learning", "LLM", "GPT", "neural network"] }
    ]
};

function loadState() {
    const saved = localStorage.getItem('replyradar-state');
    if (saved) {
        try {
            state = JSON.parse(saved);
        } catch (e) {
            console.error('Error loading state:', e);
        }
    }
    render();
}

function saveState() {
    localStorage.setItem('replyradar-state', JSON.stringify(state));
}

function showView(view) {
    document.getElementById('view-search').classList.add('hidden');
    document.getElementById('view-queue').classList.add('hidden');
    document.getElementById(`view-${view}`).classList.remove('hidden');
    
    document.getElementById('nav-search').className = 'flex-1 p-4 text-gray-600 font-medium';
    document.getElementById('nav-queue').className = 'flex-1 p-4 text-gray-600 font-medium';
    document.getElementById(`nav-${view}`).className = 'flex-1 p-4 border-b-2 border-blue-600 text-blue-600 font-medium';
    
    render();
}

function useKeywordPack(packId) {
    const pack = state.keywordPacks.find(p => p.id === packId);
    if (pack) {
        document.getElementById('search-keywords').value = pack.keywords.join(', ');
    }
}

function generateSearchQuery() {
    const keywords = document.getElementById('search-keywords').value.trim();
    if (!keywords) return null;

    const age = parseInt(document.getElementById('filter-age').value);
    const likes = parseInt(document.getElementById('filter-likes').value);
    const replies = parseInt(document.getElementById('filter-replies').value);
    const excludeReplies = document.getElementById('filter-exclude-replies').checked;
    const excludeRetweets = document.getElementById('filter-exclude-retweets').checked;
    const verified = document.getElementById('filter-verified').checked;

    const keywordArray = keywords.split(',').map(k => k.trim()).filter(k => k);
    const query = keywordArray.map(k => `"${k}"`).join(' OR ');

    const filters = [];
    filters.push(`min_faves:${likes}`);
    filters.push(`max_replies:${replies}`);
    if (excludeReplies) filters.push('-filter:replies');
    if (excludeRetweets) filters.push('-filter:retweets');
    if (verified) filters.push('filter:verified');

    return `(${query}) ${filters.join(' ')}`.trim();
}

function generateAndCopyQuery() {
    const query = generateSearchQuery();
    if (!query) {
        showMessage('Please enter some keywords', 'error');
        return;
    }

    navigator.clipboard.writeText(query);
    showMessage('✓ Query copied! Paste it into X search and set time filter to "Latest"', 'success');
}

function openSearchInX() {
    const query = generateSearchQuery();
    if (!query) {
        showMessage('Please enter some keywords', 'error');
        return;
    }

    const url = `https://twitter.com/search?q=${encodeURIComponent(query)}&src=typed_query&f=live`;
    window.open(url, '_blank');
    showMessage('✓ Opened in X. Copy interesting tweet URLs and paste below!', 'success');
}

function showMessage(text, type) {
    const el = document.getElementById('search-message');
    el.className = `p-4 rounded-lg ${type === 'error' ? 'bg-red-50 text-red-800 border border-red-200' : 'bg-green-50 text-green-800 border border-green-200'}`;
    el.textContent = text;
    el.classList.remove('hidden');
    setTimeout(() => el.classList.add('hidden'), 5000);
}

function processBulkUrls() {
    const textarea = document.getElementById('bulk-urls');
    const text = textarea.value.trim();
    
    if (!text) {
        showMessage('Please paste some tweet URLs', 'error');
        return;
    }
    
    const urls = text.split('\n')
        .map(line => line.trim())
        .filter(line => line && (line.includes('twitter.com') || line.includes('x.com')));
    
    if (urls.length === 0) {
        showMessage('No valid tweet URLs found', 'error');
        return;
    }
    
    let addedCount = 0;
    
    urls.forEach(url => {
        const match = url.match(/status\/(\d+)/);
        if (!match) return;
        
        const tweetId = match[1];
        if (state.tweets.find(t => t.id === tweetId)) return;
        
        state.tweets.push({
            id: tweetId,
            text: 'Manual entry - click to view on X',
            author: '@user',
            timestamp: Date.now(),
            status: 'pending',
            likes: 0,
            replies: 0,
            url: url.includes('x.com') ? url : url.replace('twitter.com', 'x.com')
        });
        
        addedCount++;
    });
    
    textarea.value = '';
    saveState();
    showMessage(`✓ Added ${addedCount} tweet${addedCount !== 1 ? 's' : ''} to queue!`, 'success');
    setTimeout(() => {
        showView('queue');
    }, 1500);
}

function updateTweetStatus(id, status) {
    const tweet = state.tweets.find(t => t.id === id);
    if (tweet) {
        tweet.status = status;
        saveState();
        render();
    }
}

function clearCompleted() {
    const count = state.tweets.filter(t => t.status !== 'pending').length;
    if (count === 0) return;
    
    if (confirm(`Clear ${count} completed tweets?`)) {
        state.tweets = state.tweets.filter(t => t.status === 'pending');
        saveState();
        render();
    }
}

function addKeywordPack() {
    const name = document.getElementById('new-pack-name').value.trim();
    const keywords = document.getElementById('new-pack-keywords').value.trim();
    
    if (!name || !keywords) {
        alert('Please enter both pack name and keywords');
        return;
    }
    
    state.keywordPacks.push({
        id: Date.now(),
        name: name,
        keywords: keywords.split(',').map(k => k.trim()).filter(k => k)
    });
    
    document.getElementById('new-pack-name').value = '';
    document.getElementById('new-pack-keywords').value = '';
    saveState();
    render();
}

function deleteKeywordPack(id) {
    if (confirm('Delete this keyword pack?')) {
        state.keywordPacks = state.keywordPacks.filter(p => p.id !== id);
        saveState();
        render();
    }
}

function exportData() {
    const data = {
        tweets: state.tweets,
        keywordPacks: state.keywordPacks,
        exportDate: new Date().toISOString()
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `replyradar-backup-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
}

function render() {
    // Quick packs
    const quickPacksHtml = state.keywordPacks.map(pack => `
        <button 
            onclick="useKeywordPack(${pack.id})"
            class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm hover:bg-blue-200"
        >
            ${pack.name}
        </button>
    `).join('');
    const quickPacksEl = document.getElementById('quick-packs');
    if (quickPacksEl) quickPacksEl.innerHTML = quickPacksHtml;

    // Manage packs
    const managePacksHtml = state.keywordPacks.map(pack => `
        <div class="flex items-center justify-between p-3 bg-gray-50 rounded">
            <div>
                <p class="font-medium">${pack.name}</p>
                <p class="text-xs text-gray-600">${pack.keywords.join(', ')}</p>
            </div>
            <button onclick="deleteKeywordPack(${pack.id})" class="text-red-600 hover:text-red-800">
                🗑️
            </button>
        </div>
    `).join('');
    const managePacksEl = document.getElementById('manage-packs');
    if (managePacksEl) managePacksEl.innerHTML = managePacksHtml;

    // Queue
    const pendingTweets = state.tweets.filter(t => t.status === 'pending');
    const completedTweets = state.tweets.filter(t => t.status !== 'pending');
    
    const queueCountEl = document.getElementById('queue-count');
    const completedCountEl = document.getElementById('completed-count');
    if (queueCountEl) queueCountEl.textContent = pendingTweets.length;
    if (completedCountEl) completedCountEl.textContent = completedTweets.length;

    const queueEmpty = document.getElementById('queue-empty');
    const queueList = document.getElementById('queue-list');
    
    if (pendingTweets.length === 0) {
        if (queueEmpty) queueEmpty.classList.remove('hidden');
        if (queueList) queueList.classList.add('hidden');
    } else {
        if (queueEmpty) queueEmpty.classList.add('hidden');
        if (queueList) {
            queueList.classList.remove('hidden');
            queueList.innerHTML = pendingTweets.map(tweet => {
                const age = Math.floor((Date.now() - tweet.timestamp) / 60000);
                const ageText = age < 60 ? `${age}m` : `${Math.floor(age/60)}h`;
                
                return `
                    <div class="bg-white rounded-lg shadow p-4">
                        <div class="flex justify-between items-start mb-3">
                            <div class="flex-1">
                                <div class="flex items-center gap-2 mb-2">
                                    <span class="font-bold">${tweet.author}</span>
                                    <span class="text-gray-500 text-sm">• ${ageText} ago</span>
                                </div>
                                <p class="text-gray-800">${tweet.text}</p>
                            </div>
                        </div>
                        
                        <div class="flex items-center justify-between pt-3 border-t">
                            <div class="flex gap-4 text-sm text-gray-600">
                                <span>❤️ ${tweet.likes}</span>
                                <span>💬 ${tweet.replies}</span>
                            </div>
                            <div class="flex gap-2">
                                <a href="${tweet.url}" target="_blank" class="px-3 py-1 text-blue-600 hover:bg-blue-50 rounded">
                                    🔗 Open
                                </a>
                                <button onclick="updateTweetStatus('${tweet.id}', 'replied')" class="px-3 py-1 text-green-600 hover:bg-green-50 rounded">
                                    ✅ Replied
                                </button>
                                <button onclick="updateTweetStatus('${tweet.id}', 'skipped')" class="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded">
                                    ❌ Skip
                                </button>
                            </div>
                        </div>
                    </div>
                `;
            }).join('');
        }
    }
}

// Initialize on load
loadState();
