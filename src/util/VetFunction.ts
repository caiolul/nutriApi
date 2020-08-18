// Function for calculate Vet

export default function VetResult(tmb: number, fisica: string): number {
    try {
        let fisicaConst = 0;
        let vet = 0;
        if (fisica === '1') {
            fisicaConst = 1.2;
        } else if (fisica === '2') {
            fisicaConst = 1.375;
        } else if (fisica === '3') {
            fisicaConst = 1.55;
        } else if (fisica === '4') {
            fisicaConst = 1.725;
        } else {
            fisicaConst = 1.9;
        }
        vet = tmb * fisicaConst;
        return vet;
    } catch (error) {
        throw new Error('Error!! Verify types');
    }
}
