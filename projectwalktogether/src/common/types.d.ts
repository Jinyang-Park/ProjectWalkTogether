declare interface IdbState {
    ESNTL_ID: number | string
    FCLTY_NM: string
    LCLAS_NM: number | string
    MLSFC_NM: string
    ZIP_NO: number | string
    FCLTY_ROAD_NM_ADDR: string
    FCLTY_LA: number | string
    FCLTY_LO: number | string
    WORKDAY_OPN_BSNS_TIME: number | string
    WORKDAY_CLOS_TIME: number | string
    SAT_OPN_BSNS_TIME: number | string
    SAT_CLOS_TIME: number | string
    SUN_OPN_BSNS_TIME: number | string
    SUN_CLOS_TIME: number | string
    RSTDE_OPN_BSNS_TIME: number | string
    RSTDE_CLOS_TIME: number | string
    RSTDE_GUID_CN: number | string
    TEL_NO: number | string
    OPTN_DC: number | string
    ADIT_DC: string
    isOpen: boolean
}

declare interface ResultItemProps {
    info: {
        ESNTL_ID: number | string
        FCLTY_NM: number | string
        LCLAS_NM: number | string
        MLSFC_NM: number | string
        ZIP_NO: number | string
        FCLTY_ROAD_NM_ADDR: number | string
        FCLTY_LA: number | string
        FCLTY_LO: number | string
        WORKDAY_OPN_BSNS_TIME: number | string
        WORKDAY_CLOS_TIME: number | string
        SAT_OPN_BSNS_TIME: number | string
        SAT_CLOS_TIME: number | string
        SUN_OPN_BSNS_TIME: number | string
        SUN_CLOS_TIME: number | string
        RSTDE_OPN_BSNS_TIME: number | string
        RSTDE_CLOS_TIME: number | string
        RSTDE_GUID_CN: number | string
        TEL_NO: number | string
        OPTN_DC: number | string
        ADIT_DC: string
        isOpen: boolean
    }
}
