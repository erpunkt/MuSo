namespace flowerClasses {

    export interface VectorMain {
        x: number;
        y: number;
    }

    window.addEventListener("load", handleLoad);
    export let crc2: CanvasRenderingContext2D; //crc2 = CanvasRenderingContext2D
    export let golden: number = 0.62;

    let clouds: Cloud [] = [];
    let flowers: Flower[] = [];
    let bees: Bee[] = [];
    

    
    function handleLoad(_event: Event): void {
        
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
        return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d")!;

        let horizon: number = crc2.canvas.height * golden;
        let posMountains: VectorMain = { x: 0, y: horizon };
        let posRiver: VectorMain = { x: 0, y: 600 * golden };

        drawBackground();
        drawSun({ x: 250, y: 100 });
        drawMountains(posMountains, 75, 200, "#686a77", "#b7c2d4");
        drawMountains(posMountains, 50, 150, "#686a77", "#c3b1bd");
        drawCloud(2);
        drawTree({x: 300, y: 600 * golden});
        drawRiver(posRiver, -20, -50, "#334648" , "#6a767a");
        drawFlowers(10);
        drawBee(6);

        let background: ImageData = crc2.getImageData(0, 0, 1000, 600);
        drawFlowers(20);

        window.setInterval(update, 20, background);

 
    }



    function drawRiver(_position: VectorMain, _min: number, _max: number, _colorLow: string, _colorHigh: string): void {
        console.log("River", _position, _min, _max);
        let stepMin: number = 50;
        let stepMax: number = 150;
        let x: number = 0;

        crc2.save();
        crc2.translate(_position.x, _position.y);

        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_max);

        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y: number = -_min - Math.random() * (_max - _min);

            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);

        crc2.lineTo(x, 0);
        crc2.closePath();

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);

        crc2.fillStyle = gradient;
        crc2.fill();

        crc2.restore();
    }


    function drawFlowers(_nFlower: number): void {
        for (let i: number = 0; i < _nFlower; i++) {
            let flower: Flower = new Flower();
            flowers.push(flower);
        }

}
    function drawTree(_position: VectorMain): void {    
//first Tree
    //Trunk
            crc2.save();
            crc2.beginPath();
            crc2.rect(_position.x , _position.y , 20, -70);
            crc2.fillStyle = "#54372a";
            crc2.fill();

    //Treetop
            crc2.beginPath();
            crc2.moveTo(250, 305);
            crc2.lineTo(370, 305);
            crc2.lineTo(310, 200);


            crc2.moveTo(260, 250);
            crc2.lineTo(360, 250);
            crc2.lineTo(310, 155);

            crc2.fillStyle = "#293730";
            crc2.fill();
            crc2.closePath();
            crc2.restore();



            //second Tree

            //trunk
            crc2.save();
            crc2.beginPath();
            crc2.rect(_position.x + 210, _position.y , 30, -70); 
            crc2.fillStyle = "#54372a";
            crc2.fill();
            crc2.closePath();
    

    //Treetop
            crc2.fillStyle = "#485f34";
            crc2.beginPath();
            crc2.arc(_position.x + 210, _position.y - 100, 45, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
    
            crc2.beginPath();
            crc2.arc(_position.x + 210, _position.y - 150, 40, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
    
            crc2.beginPath();
            crc2.arc(_position.x + 250, _position.y - 160, 40, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
    
            crc2.beginPath();
            crc2.arc(_position.x + 220, _position.y - 200, 50, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
    
            crc2.beginPath();
            crc2.arc(_position.x + 270, _position.y - 105, 30, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
    
            crc2.beginPath();
            crc2.arc(_position.x + 200, _position.y - 160, 50, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
    }



    function drawBackground(): void {
        console.log("Background");

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "#fabb7c");
        gradient.addColorStop(golden, "#ac6d7e");
        gradient.addColorStop(1, "#5a6343");
        


        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }

    function drawSun(_position: VectorMain): void {
        console.log("Sun", _position);

        let r1: number = 50;
        let r2: number = 200;
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);

        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }


    function drawCloud(_nCloud: number): void {
        for (let i: number = 0; i < _nCloud; i++) {
            let cloud: Cloud = new Cloud();
            clouds.push(cloud);
        }

    }

    function drawMountains(_position: VectorMain, _min: number, _max: number, _colorLow: string, _colorHigh: string): void {
        console.log("Mountains", _position, _min, _max);
        let stepMin: number = 50;
        let stepMax: number = 150;
        let x: number = 0;

        crc2.save();
        crc2.translate(_position.x, _position.y);

        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_max);

        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y: number = -_min - Math.random() * (_max - _min);

            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);

        crc2.lineTo(x, 0);
        crc2.closePath();

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);

        crc2.fillStyle = gradient;
        crc2.fill();

        crc2.restore();
    }

    function drawBee(_nBee: number): void {
        for (let i: number = 0; i < _nBee; i++) {
            let bee: Bee = new Bee();
            bees.push(bee);
        }

}

    


    function update(_background: ImageData): void {

    // console.log("updated");
    crc2.putImageData(_background, 0, 0);

    for (let cloud of clouds) {
        cloud.move(1);
        cloud.draw();
        }

    for (let flower of flowers) {
    flower.move(1);
    flower.draw();
    }

    for (let bee of bees) {
        bee.move(1);
        bee.draw();
        }

    
}




    }
    




