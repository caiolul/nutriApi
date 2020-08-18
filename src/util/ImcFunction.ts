// Function for calculate IMC

export default function ImcResult(weight: number, height: number): number {
    try {
        let imc = 0;
        imc = Math.round(height / (weight * weight));
        return imc;
    } catch (error) {
        throw new Error('Error!! Verify types');
    }
}
