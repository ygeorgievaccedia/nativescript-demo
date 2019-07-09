export type ListViewModelType = "big" | "small" | "small-no-image";

export interface ListViewModel {
    title: string,
    type: ListViewModelType,
    imageUrl: string
}
