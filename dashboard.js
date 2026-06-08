<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    
</head>
<body>
    <header>
      <div class="container">
        <h1>Swapskills</h1>
      
           <nav>
             <a href="D:\Swap-skills\templates\index.html">Home</a>
             <a href="D:\Swap-skills\templates\create_post.html" id="createBtn">Create Posts</a>
             <input type="text" placeholder="Search here" id="searchInput"
              style="padding:3px;border-radius:7px;font-size:15px;">
                
             <a href="D:\Swap-skills\templates\auth.html" ><button id="loginBtn">Sign in</button></a>
          </nav>
       </div> 
       
      </header>
  <div id="feed">  
  </div>
 
     
  <script src="{{ url_for('static', filename='js/dashboard.js') }}"></script>
</body>
</html>
