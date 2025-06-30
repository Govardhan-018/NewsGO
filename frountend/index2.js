const serverURL = 'http://192.168.204.131:3096/news?';
let country = 'in';
let category = 'top';
let language = 'en';

// Fetch and render news articles
async function getsomeNews(country, category, language) {
    const response = await fetch(`${serverURL}category=${category}&country=${country}&language=${language}`);
    if (response.ok) {
        const data = await response.json();
        const html = data.results.map(element => `
            <div class="n_news">
                <h3 class="news">${element.title}</h3>
                <p class="disp">${element.description || 'No description available'}</p>
                <div class="n__news__btn">
                    <p class="news__time">${element.pubDate || 'Unknown date'}</p>
                    <button class="__open" data-url="${element.link}">Open</button>
                </div>
            </div>
        `).join('');
        document.querySelector('.n__cont').innerHTML = html;
        // Add click listeners to "Open" buttons
        document.querySelectorAll('.__open').forEach(btn => {
            btn.addEventListener('click', function () {
                const link = this.getAttribute('data-url');
                window.open(link, '_blank');
            });
        });
    } else {
        console.error('Failed to fetch news:', response.statusText);
    }
}

// Render the side panel and animate it in
function renderSidePanel() {
    const html = `
        <div class="_side hide">
            <div class="_s_head">
                <div class="_s_bt">
                    <img src="./images/arrright.svg" alt="arrow right" class="_sidear">
                </div>
            </div>
            <div class="_option">
                <div class="_country c_side">
                    <h2>Country</h2>
                </div>
                <div class="_cate c_side">
                    <h2>Category</h2>
                </div>
                <div class="_lang c_side">
                    <h2>Language</h2>
                </div>
            </div>
        </div>
    `;
    document.querySelector(".side").innerHTML = html;

    // Animate panel in
    setTimeout(() => {
        const sidePanel = document.querySelector("._side");
        sidePanel.classList.remove("hide");
        sidePanel.classList.add("show");
    }, 10);

    // Close panel on button click
    document.querySelector("._s_bt").addEventListener("click", () => {
        const sidePanel = document.querySelector("._side");
        sidePanel.classList.remove("show");
        sidePanel.classList.add("hide");
        setTimeout(() => {
            document.querySelector(".side").innerHTML = "";
        }, 500); // Match CSS transition duration
    });

    setupOptionListeners();
}

// Attach dropdown listeners for country, category, and language
function setupOptionListeners() {
    setupDropdown("._country", [
        { value: "in", label: "India" },
        { value: "us", label: "USA" },
        { value: "uk", label: "UK" },
        { value: "au", label: "Australia" },
        { value: "ca", label: "Canada" }
    ], (val) => {
        country = val;
        getsomeNews(country, category, language);
    });

    setupDropdown("._cate", [
        { value: "top", label: "Top" },
        { value: "business", label: "Business" },
        { value: "entertainment", label: "Entertainment" },
        { value: "health", label: "Health" },
        { value: "science", label: "Science" },
        { value: "sports", label: "Sports" },
        { value: "technology", label: "Technology" }
    ], (val) => {
        category = val;
        getsomeNews(country, category, language);
    });

    setupDropdown("._lang", [
        { value: "en", label: "English" },
        { value: "kn", label: "Kannada" },
        { value: "hi", label: "Hindi" },
        { value: "fr", label: "French" },
        { value: "es", label: "Spanish" },
        { value: "de", label: "German" }
    ], (val) => {
        language = val;
        getsomeNews(country, category, language);
    });
}

// Generic dropdown setup for side panel options
function setupDropdown(selector, options, onSelect) {
    const el = document.querySelector(selector);
    el.addEventListener("click", function handler(e) {
        if (el.querySelector("ul")) return;
        const ul = document.createElement("ul");
        options.forEach(opt => {
            const li = document.createElement("li");
            li.textContent = opt.value;
            li.title = opt.label;
            li.addEventListener("click", function (event) {
                event.stopPropagation();
                onSelect(opt.value);
                el.innerHTML = `<h2>${opt.label}</h2>`;
            });
            ul.appendChild(li);
        });
        el.appendChild(ul);
    });
}

// Initial news fetch
getsomeNews(country, category, language);

// Open side panel on click
document.querySelector("._cont").addEventListener("click", renderSidePanel);