export const formatNumber =
    (num) => {

        return Intl.NumberFormat(
            "en-IN"
        ).format(num)
    }
