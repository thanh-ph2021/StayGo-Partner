export type FilterRequest = {
    city?: string,
    country?: string,
    rating?: string,
    pageIndex: number,
    pageSize: number,
}

export type HotelModel = {
    id: string,
    ownerId: string,
    name: string,
    description: string,
    address: string,
    city: string,
    country: string,
    bannerImage: string,
    imageUrls: string[],
    createdAt: string,
    updatedAt: string,
    rating: number,
}