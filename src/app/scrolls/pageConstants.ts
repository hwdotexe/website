export class Pages {
    public static categories = [
        { id: "tech101",name: "Tech 101" },
        { id: "python1",name: "Python Programming I" }
    ];

    public static pages = [
        { id: "computerBasics", category:"tech101", name: "Computer Basics", url:"../assets/scrolls/pages/tech101/computerBasics.md" },
        { id: "python1intro", category:"python1", name: "Introduction", url:"../assets/scrolls/pages/python1/part1.md" },
        { id: "python1part2", category:"python1", name: "Data Types", url:"../assets/scrolls/pages/python1/part2.md" },
        { id: "python1part3", category:"python1", name: "Variables", url:"../assets/scrolls/pages/python1/part3.md" }
    ];

    public static getID(id: string): number {
        for (var item of Pages.pages) {
            if (item.id === id) {
                return Pages.pages.indexOf(item);
            }
        }

        return -1;
    }
}