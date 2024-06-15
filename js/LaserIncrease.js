// Tăng đạn
class LaserIncrease {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    create($container) {
        const $element = document.createElement("img");
        $element.src = "Images/laser-increase.png";
        $element.className = "laser-increase";
        this.$element = $element;
        $container.appendChild($element);
        setPosition($element, this.x, this.y);
    }

    destroy($container) {
        $container.removeChild(this.$element);
    }

    update($container) {
        if(document.querySelector(".laser-increase") == null) return;
        this.y += 5;
        setPosition(this.$element, this.x, this.y);
        let r1 = this.$element.getBoundingClientRect();
        const $player = document.querySelector(".player");
        const r2 = $player.getBoundingClientRect();
        if (rectsIntersect(r1, r2)) {
            if(LASER_LEVELS < 3) LASER_LEVELS++;
            else {
                LASER_COOLDOWN -= 0.02;
            }
            this.destroy($container);
        }
    }
}
