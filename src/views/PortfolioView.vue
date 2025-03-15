<template>
  <div class="container">
      <h1>Personal Portfolio</h1>
      <div class="cards">
          <div class="card">
              <img src="../assets/pic/cardimg-1A2Bgame.png" alt="1A2B Game">
              <div class="card-body">
                  <h5>1A2B</h5>
                  <p>使用Javascript和自定義樣式製作</p>
                  <a href="../htmlwork/1A2Bgame.html" target="_blank">Link</a>
              </div>
          </div>
          <div class="card">
              <img src="../assets/pic/cardimg-guessNumbergame.png" alt="Guess Number Game">
              <div class="card-body">
                  <h5>終極密碼</h5>
                  <p>使用Javascript和自定義樣式製作</p>
                  <a href="../htmlwork/guessNumber.html" target="_blank">Link</a>
              </div>
          </div>
          <div class="card">
              <img src="../assets/pic/cardimg-LittleMarygame.png" alt="Little Mary Game">
              <div class="card-body">
                  <h5>小瑪莉</h5>
                  <p>使用Javascript和自定義樣式製作</p>
                  <a href="../htmlwork/LittleMary.html" target="_blank">Link</a>
              </div>
          </div>
      </div>
  </div>
</template>

<style>
  .container {
      text-align: center;
      margin: 0 auto;
      padding: 20px;
  }

  h1 {
      font-size: 2rem;
      color: #333;
      margin-bottom: 1.5rem;
  }

  .cards {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      justify-content: center;
  }

  .card {
      width: 18rem;
      border: 1px solid #ccc;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .card:hover {
      transform: translateY(-5px);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }

  .card img {
      width: 100%;
      border-bottom: 2px solid rgb(238, 113, 90);
  }

  .card-body {
      padding: 10px;
      text-align: left;
  }

  .card h5 {
      font-size: 1.25rem;
      color: #333;
      margin-bottom: 0.5rem;
  }

  .card p {
      margin-bottom: 1rem;
      color: #666;
  }

  .card a {
      display: inline-block;
      padding: 10px 15px;
      background-color: #4d869c;
      color: #fff;
      text-decoration: none;
      border-radius: 4px;
      transition: background-color 0.3s ease;
  }

  .card a:hover {
      background-color: #fa7070;
  }
</style>
