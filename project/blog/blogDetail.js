const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');

// สร้างข้อความ welcome to id
const welcomeMessage = document.createElement('p');
welcomeMessage.textContent = `Welcome to ${id}`;
    
// เพิ่มข้อความลงในเนื้อหาของหน้า
document.getElementById('content').appendChild(welcomeMessage);

fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const selectblog = data.blog.find(item => item.id === parseInt(id));

    if (selectblog) {
      const blogContent = document.getElementById('content');
      const blogHTML = `
      <div class="blog__detail-container container">
        

        <div class="blog__detail-cover">
            <img class="blog__detail-coverpic" src="images/cover${selectblog.id}.jpg"/>
        </div>
        <div class="blog__detail-header">
            <h2 class="blog__detail-title">${selectblog.title}</h2>

            <div class="blog__detail-views">
                <i class="material-symbols-outlined">visibility</i> 
                <p class="blog__detail-view">${selectblog.views}</p>

            </div>

        </div>

        <div class="blog__detail-content">
            <p>${selectblog.content}</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam non repellendus velit cum vitae nobis asperiores doloremque quod, enim consectetur possimus quibusdam aliquam, explicabo ducimus similique vero quas accusantium quasi?</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam non repellendus velit cum vitae nobis asperiores doloremque quod, enim consectetur possimus quibusdam aliquam, explicabo ducimus similique?</p>

        </div>

        <a class="blog__detail-tag tag " id="Technology">#${selectblog.category}</a>

        


        <div class="blog__detail-footer">
            <img class="avatar" src="images/avatar.jpg"/>
            <div>
                <p class="bog__detail-autuor">Author: <b>${selectblog.author}</b></p>
                <p> date: ${selectblog.date}</p>
            </div>
            
        </div>


 
      </div>
        
      `;
      blogContent.innerHTML = blogHTML;

      const blogTitle = document.getElementById('BlogSelectTitle');
      const blogTitleHTML = `<p class='blogdetail__title'>${selectblog.title}</p>`;
      blogTitle.innerHTML = blogTitleHTML;

      const numberOfBlogs = data.blog.length;


    } else {
      const errorMessage = document.createElement('p');
      errorMessage.textContent = 'Blog not found';
      document.getElementById('content').appendChild(errorMessage);
    }
  
  })
  .catch(error => {
    console.error('Error:', error);
  });
