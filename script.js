class Entity {
	constructor(Sens="Left+", BorderLimite=true) {
		this.Move = document.getElementById('ply').style;
		this.Sens = Sens;
		this.Speed = 1;
		this.BorderLimite = BorderLimite
		this.GetNumFromPercent = (el) => Number(el.split('%')[0])
	}

	Moveing(speed=this.Speed) {
		if (this.Sens == "Left+") {
			this.Move.left = `${this.GetNumFromPercent(this.Move.left) + speed}%`
		}
		else if (this.Sens == "Left-") {
			this.Move.left = `${this.GetNumFromPercent(this.Move.left) - speed}%`
		}
		if (this.Sens == "Top-") {
			this.Move.top = `${this.GetNumFromPercent(this.Move.top) - speed*2}%`
		}
		else if (this.Sens == "Top+") {
			this.Move.top = `${this.GetNumFromPercent(this.Move.top) + speed*2}%`
		}
	}

	ChangeSens(event) {
		if (event['key']=="ArrowRight") {
			this.Sens = "Left+"
		}
		else if (event['key']=="ArrowLeft") {
			this.Sens = "Left-"
		}
	
		if (event['key']=="ArrowDown") {
			this.Sens = "Top+"
		}
		else if (event['key']=="ArrowUp") {
			this.Sens = "Top-"
		}
	}

	CheckBorderLimite(BorderLimite=this.BorderLimite) {
		if (BorderLimite==false) {return 0}

		if (this.GetNumFromPercent(this.Move.left) >= 100) { this.Move.left = '0%' }
		else if (this.GetNumFromPercent(this.Move.left) < -5) { this.Move.left = '100%' }

		if (this.GetNumFromPercent(this.Move.top) >= 100) { this.Move.top = '0%' }
		else if (this.GetNumFromPercent(this.Move.top) < -5) { this.Move.top = '100%' }
	}

}


let Ply = new Entity()
setInterval(() => {	Ply.Moveing(1);
					Ply.CheckBorderLimite();}, 100)

document.body.onkeydown = (event) => {Ply.ChangeSens(event)}
