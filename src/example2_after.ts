export default class CPF {
    validate(rawCpf: string | null | undefined) {
        if (!rawCpf) {
            return false;
        }

        const cpf = this.cleanCPF(rawCpf);
        
        if (cpf.length !== 11){
            return false;
        } 

        if (this.areDigitsEquals(cpf)){
            return false;
        }

        const firstVerifierDigit = this.calculateDigit(cpf, 10);
        const secondVerifierDigit = this.calculateDigit(cpf, 11);       
        const verifierDigit = this.extractVerifierDigit(cpf);
        const calculatedVerifierDigit = parseInt(`${firstVerifierDigit}${secondVerifierDigit}`);  
        return verifierDigit === calculatedVerifierDigit;
    }

    cleanCPF(cpf: string): string {
        return cpf.replace(/\D/g, ''); 
    }

    areDigitsEquals(cpf: string) :boolean {
        return (cpf.split("").every(c => c === cpf[0]));            
    }

    calculateDigit(cpf: string, factor: number): number {
        let total = 0;
        
        for (const digit of cpf) {
            if (factor > 1) total += parseInt(digit) * factor--;
        }
        const rest = total%11;
        return (rest < 2) ? 0: (11 - rest);
    }

    extractVerifierDigit(cpf: string): number {
        return parseInt(cpf.slice(9))
    }
}
