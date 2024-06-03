interface KurbanUserDataType {
    name: string
    phone: string
    animals: number
    kurbans: Array<SeparateAnimalDataType>
}

interface SeparateAnimalDataType {
    number: number
    name: string
    kurban_place: 'fitr_dag' | 'fitr_mekka'
    part: 'not' | 'half' | 'foot'
    address_data: {
        value: string
        floor: number
        flat: number
        entrance: number
        comment: string
    }
}