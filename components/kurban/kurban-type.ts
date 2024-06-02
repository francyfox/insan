interface KurbanUserDataType {
    name: string
    phone: string
    animals: number
    collection: Array<SeparateAnimalDataType>
}

interface SeparateAnimalDataType {
    name: string
    cuttingSite: string
    bodyPart: string
    address: {
        address: string
        floor: number
        underpass: number
        message: string
    }
}