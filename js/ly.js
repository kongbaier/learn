// 页面加载时保存#main区域的初始内容
let originalMainContent = document.getElementById("main").innerHTML;

document
  .getElementById("personalHomeTab")
  .addEventListener("click", function () {
    // 点击个人首页时恢复原始内容
    document.getElementById("main").innerHTML = originalMainContent;
  });

// 修正：不需要修改originalMainContent的值，只需在点击留言板时设置#main区域的内容
document
  .getElementById("messageBoardTab")
  .addEventListener("click", function () {
    // 设置main区域的内容为留言板
    document.getElementById("main").innerHTML = `
    <div id="messages">
      <h3>留言区</h3>
      <!-- 动态添加留言 -->
    </div> 
    
    <form id="message-form">
      <h2>留言板</h2>
      <input type="text" id="name" placeholder="您的姓名" required>
      <textarea id="message" placeholder="留言内容" required></textarea>
      <button type="submit">提交留言</button>
    </form>

    `;
    // 添加表单提交事件处理器
    document
      .getElementById("message-form")
      .addEventListener("submit", function (e) {
        e.preventDefault(); // 阻止表单默认提交行为
        // 获取用户输入的姓名和留言内容
        const name = document.getElementById("name").value;
        const message = document.getElementById("message").value;
        // 创建一个新的留言元素
        const messageElement = document.createElement("p");
        messageElement.textContent = `${name} 说：${message}`;
        // 将新留言添加到留言区
        document.getElementById("messages").appendChild(messageElement);
        // 清空表单
        document.getElementById("name").value = "";
        document.getElementById("message").value = "";
      });
  });
