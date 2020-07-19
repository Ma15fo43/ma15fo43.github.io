AOS.init();

new TypeIt("#bio", {
    speed: 60,
    loop: false
}).type("Fullstack devloper,", { delay: 300 })
.move(-6)
.type("e")
.move("END")
.type(" pro designer.")
.move(-10)
.delete(3)
.type("amateur")
.move("END")
.type(" I also take photos")
.move(-7)
.type(" 📸 ")
.move("END")
.go();