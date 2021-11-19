export class Card {
    public id: number;
    public title: string;
    public description: string;
    public status: string;

    constructor(id: number, title: string, desc: string, status: string) {
        this.id = id;
        this.title = title;
        this.description = desc;
        this.status = status;
    }
}
