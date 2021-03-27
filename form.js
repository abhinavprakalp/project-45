class form{
    constructor(){
        this.button1=createButton("Fight as Rama");
        this.button2=createButton("Fight as Arjun");
        this.button3=createButton("Fight as Bheema");
        this.title=createElement('h2');
    }
    display(){
        this.title.html("Fight between great warriors");
        this.title.position(300,50);

        image(rama,100,200,100,100);
        this.button1.position(100,300);

        image(arjuna,300,200,100,100);
        this.button2.position(300,300);

        image(bheeema,500,200,100,100);
        this.button3.position(500,300);
    }
}