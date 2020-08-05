# [Animate CC] - Hướng dẫn làm game mê cung trên HTML5 Canvas

###### tags: `AnimateCC`, `HTML5 Canvas`

Chào các bạn, hôm nay chúng ta sẽ học làm game mê cung trên Animate CC HTML5 Canvas nhé!

![](https://i.imgur.com/LIGczk1.png)

Game mê cung là game mà chúng ta sẽ di chuyển chuột đi tới đích làm sao mà không bị chạm vào tường.

Trước tiên, chúng ta hãy tạo nên màn chơi trước. Đổi tên layer hiện tại thành 'maze' và vẽ một mê cung có 1 lối vào và 1 đích đến. Không nhất thiết phải vẽ giống tut của mình đâu, mọi người cứ tha hồ sáng tạo nhé!

![](https://i.imgur.com/wKiRqXU.png)

Ta export mê cung vừa vẽ thành movieclip và đặt tên là 'maze'. Đặt tên instance trên scene cũng là 'maze' luôn.

![](https://i.imgur.com/RhYyRHM.png)

Tiếp đến, ta tạo cần tạo 2 khu vực bắt đầu và đích đến. Vẽ một hình chữ nhật ở mỗi khu vực và export lần lượt là 'start' và 'end' nhé! Tên instance mình cũng sẽ đặt là 'start', 'end' cho tiện. Vậy là chúng ta hoàn thành việc tạo màn chơi rồi đấy.

![](https://i.imgur.com/SIhKHoz.png)

Giờ ta tạo một layer mới, đặt tên là 'code' và nhấn F9 để bắt đầu thiết lập cho trò chơi nào.

Vì đây là trò chơi sử dụng chuột di trên màn hình. Vậy nên ta cần phải enable tính năng di chuột lên trước.

```
stage.enableMouseOver();
```

Hãy bắt đầu với hàm khởi tạo init(). Đầu tiên, chúng ta muốn màn chơi sẽ ẩn đi trước khi người chơi nhấn vào vị trí bắt đầu.

```
var root = this;

function init() {
	root.start.visible = true;
	root.end.visible = false;
	root.maze.visible = false;
}

init();
```

Tiếp theo hãy khai báo sự kiện khi nhấn vào nút start nhé. Khi nhấn start thì ẩn nút start, hiện mê cung và đích end.

```
this.startGame.on("click", startTheGame);

function startTheGame() {
	root.maze.visible = true;
	root.end.visible = true;
	root.start.visible = false;
}
```

Và sự kiện khi đi tới đích sẽ là hiển thị một dòng chữ "You win" trên màn hình. Chúng ta tạo một text "You win" trên scene, export và đặt tên cho nó là winText. Làm tương tự cho text "You lose" nhé.

```
function init() {
	...
	root.lostText.visible = false;
	root.winText.visible = false;
}

this.endGame.on("mouseover", youWon);

function youWon() {
	root.winText.visible = true;
}
```

Tiếp theo, chúng ta muốn làm sự kiện thua, đó là khi di chuột vào tường mê cung.
```
this.maze.on("mouseover", youLost);

function youLost() {
    root.end.visible = false;
    root.start.visible = true;
    root.lostText.visible = true;
}
```

Rất đơn giản đúng không nào? Chúc các bạn hoàn thành trò chơi mê cung của chính mình nhé.