export class Pages {
    public static categories = [
        { id: "python1",name: "Python Programming I" }
    ];

    public static pages = [
        { id: "computerBasics", category:"", name: "Computer Basics", url:"../assets/scrolls/pages/tech101/computerBasics.md" },
        { id: "python1intro", category:"python1", name: "Introduction", url:"../assets/scrolls/pages/python1/part1.md" },
        { id: "python1part2", category:"python1", name: "Data Types", url:"../assets/scrolls/pages/python1/part2.md" },
        { id: "python1part3", category:"python1", name: "Variables", url:"../assets/scrolls/pages/python1/part3.md" },
        { id: "python1part4", category:"python1", name: "Handling Input", url:"../assets/scrolls/pages/python1/part4.md" },
        { id: "python1part5", category:"python1", name: "Functions", url:"../assets/scrolls/pages/python1/part5.md" },
        { id: "python1part6", category:"python1", name: "Conditionals", url:"../assets/scrolls/pages/python1/part6.md" },
        { id: "python1part7", category:"python1", name: "Wrap-up Exercise", url:"../assets/scrolls/pages/python1/part7.md" }
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