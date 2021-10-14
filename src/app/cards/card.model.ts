export class Card {
    public title: string;
    public description: string;
    public status: string;

    constructor(title: string, desc: string, status: string) {
        this.title = title;
        this.description = desc;
        this.status = status;
    }
}