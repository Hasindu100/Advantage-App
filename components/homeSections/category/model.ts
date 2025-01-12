export interface Category {
    id: number,
    title: string
}

export interface CategoryItem {
    id: number,
    categoryId: number,
    title: string,
    description: string,
    imageUrl: string,
    url: string
}