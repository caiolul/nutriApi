// Function for calculate TMB

interface ValuesTypesTmb {
    sex: string;
    fisica: string;
    weight: number;
}

export default function TmbResult(
    sex: string,
    fisica: string,
    weight: number,
): number {
    try {
        let age = 0;
        let tmb = 0;
        let func = 0;
        if (sex === 'M') {
            if (fisica === '1') {
                age = 17.5;
                func = 651;
            } else if (fisica === '2') {
                age = 15.3;
                func = 679;
            } else if (fisica === '3') {
                age = 8.7;
                func = 879;
            } else {
                age = 15.5;
                func = 487;
            }
        } else if (sex === 'F') {
            if (fisica === '1') {
                age = 12.2;
                func = 746;
            } else if (fisica === '2') {
                age = 14.7;
                func = 496;
            } else if (fisica === '3') {
                age = 8.7;
                func = 829;
            } else {
                age = 10.5;
                func = 596;
            }
        }
        tmb = weight * age + func;
        return tmb;
    } catch (error) {
        throw new Error('Error!! Verify types');
    }
}
