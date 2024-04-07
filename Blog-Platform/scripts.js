// Toggle menu
function ToggleMenu() {
  const ToggleMenu = document.querySelector(".nav__menu");
  const CloseMenu = document.querySelector(".nav__close");
  const ToggleHide = document.querySelector(".nav__toggle");

  ToggleMenu.style.display = "block";
  CloseMenu.style.display = "block";
  ToggleHide.style.display = "none";
}

// Toggle sort 
function toggleForm() {
  const form = document.querySelector(".searchsort");
  if (form.style.display === "none" || form.style.display === "") {
      form.style.display = "block";
  } else {
      form.style.display = "none";
  }

}

function loadMore() {
  const cards = document.querySelectorAll('.cards');
  cards.forEach(card => {
      card.classList.remove('hide');
  });
}



function CloseMenu() {
  const CloseMenu = document.querySelector(".nav__menu");
  const ToggleHide = document.querySelector(".nav__toggle");
  const Closebtn = document.querySelector(".nav__close")

  ToggleHide.style.display = "block";
  Closebtn.style.display = "none";
  CloseMenu.style.display = "none";
}

// Dark Mode
function Darkmode() {
  const navbar = document.querySelector(".header");
  const banner = document.querySelector(".banner");
  const waves = document.querySelector(".waves")
  const body = document.body
  const Button = document.querySelector(".login__btn")
  const BlogHeader = document.querySelector(".blog__data")
  const Searchbar = document.querySelector(".search__bar")

  body.classList.toggle("dark-mode")
  navbar.classList.toggle("dark-mode");
  banner.classList.toggle("dark-mode");
  waves.classList.toggle("dark")
  Button.classList.toggle("dark-mode")
  BlogHeader.classList.toggle("dark-mode")
  Searchbar.classList.toggle("dark-mode")
}

function searchCard() {
  const searchInput = document.querySelector(".search__intput");
  const searchText = searchInput.value.toLowerCase().trim();
  const cards = document.querySelectorAll('.cards');

  cards.forEach(card => {
    const title = card.querySelector(".card__title").textContent.toLowerCase();
    const content = card.querySelector(".ellipsis p").textContent.toLowerCase();
    const author = card.querySelector(".author").textContent.toLowerCase();
    const category = card.querySelector(".tag").textContent.toLowerCase();

    if (title.includes(searchText) || content.includes(searchText) || author.includes(searchText) || category.includes(searchText)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}


// Json
document.addEventListener("DOMContentLoaded", function() {
  fetch('data.json')
      .then(response => response.json())
      .then(data => {
          console.log(data);
          console.log(data.blog.length)
          
          const blogData = data;

          const blogSectionHome = document.querySelector(".blog__card");
          const blogs = blogData.blog;
          const tagSection = document.querySelector(".card__tag-tags");

          const BlogAvailable = document.querySelector(".blog__available")
          const BlogAvailableText = data.blog.length
          BlogAvailable.innerHTML = `<p>Blog Available : "${BlogAvailableText}"</p>`
          

          function renderSortedBlogs(sortedBlogs) {
              blogSectionHome.innerHTML = "";

              sortedBlogs.forEach(blog => {
                  const card = document.createElement("div");
                  card.classList.add("cards");

                  card.setAttribute("id", `${blog.category}`);

                  card.innerHTML = `
              <div class="card">
                <img class="coverpic" src="images/cover${blog.id}.jpg"/>
                <div class="card__content">
                    <h3 class="card__title">${blog.title}</h3>
                    <div class="ellipsis">
                        <p>${blog.content}</p>
                    </div>
                    <div class="card__tag">
                        <p class="tag">#${blog.category}</p>
                    </div>
                    <div class="card__author">
                        <div class="card__author-content">
                            <img class="avatar" src="images/avatar.jpg"/>
                            <div>
                                <p class="author">${blog.author}</p>
                                <p class="author__date">March 26 2024<span class="material-symbols-outlined card__icon">schedule</span></p>
                            </div>
                        </div>
                        <div class="yourblog__view-icon">
                            <i class="material-symbols-outlined">visibility</i> 
                            <p>${blog.views}</p>
                        </div>
                    </div>
                    <a href="#" onclick="toBlogdetail('${blog.id}')">
                      <div class="readmore__button">
                        <p>Read more</p>
                      </div>
                    </a>
                </div>
              </div>`;

                  blogSectionHome.appendChild(card);

              });
              const cards = document.querySelectorAll('.cards');
              for (let i = 0; i < cards.length; i++) {
                  if (i >= 10) {
                      cards[i].classList.add('hide');

                  } else {
                      cards[i].classList.remove('hide');
                  }
              }
              

          }
          

          function sortByAuthor() {
              const sortedByAuthor = blogs.sort((a, b) => a.author.localeCompare(b.author));
              renderSortedBlogs(sortedByAuthor);
          }

          function sortByViews() {
              const sortedByViews = blogs.sort((a, b) => b.views - a.views);
              renderSortedBlogs(sortedByViews);
          }

          const searchSort = document.querySelector(".searchsort");
          searchSort.addEventListener("click", function(event) {
              if (event.target.id === "author") {
                  sortByAuthor();
              } else if (event.target.id === "views") {
                  sortByViews();
              }
          });
          const searchForm = document.querySelector(".search__form");
          searchForm.addEventListener("submit", function(event) {
            event.preventDefault();
            searchCard();
          });

          sortByViews();

          tagSection.addEventListener("click", function(event) {
              if (event.target.tagName === "A") {
                  filterCards(`#${event.target.id}`);
              }
          });

          const filterCards = category => {
              blogSectionHome.innerHTML = "";
              const filteredBlogs = blogs.filter(blog => blog.category === category.substr(1));
              renderSortedBlogs(filteredBlogs);
          };
      })
      .catch(error => {
          console.error('', error);
      });
});

function toBlogdetail(id) {
  window.location.href = `blog.html?id=${id}`;
}
