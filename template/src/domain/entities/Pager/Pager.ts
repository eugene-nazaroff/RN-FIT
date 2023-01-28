export default class Pager<T> {
    currentPage: number;
    totalPages: number;
    onLoadMore: () => void;
    items: T[];

    constructor(
        currentPage: number,
        totalPages: number,
        onLoadMore: () => void,
        items: T[],
    ) {
        this.currentPage = currentPage;
        this.totalPages = totalPages;
        this.onLoadMore = onLoadMore;
        this.items = items;
    }
}
