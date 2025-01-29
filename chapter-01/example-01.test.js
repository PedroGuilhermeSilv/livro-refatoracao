const fs = require('fs');
const path = require('path');

// Importa a função statement e os dados
const { statement, plays, invoices } = require('./example-01');

describe('statement', () => {
    test('deve gerar uma fatura correta para múltiplas performances', () => {
        const expectedOutput =
            "Statement for BigCo\n" +
            "  Hamlet: $650.00 (55 seats)\n" +
            "  As You Like It: $580.00 (35 seats)\n" +
            "  Othello: $500.00 (40 seats)\n" +
            "Amount owed is $1,730.00\n" +
            "You earned 47 credits\n";

        const result = statement(invoices[0], plays);
        expect(result).toBe(expectedOutput);
    });

    test('deve calcular corretamente os créditos de volume para tragédia', () => {
        const singleTragedyInvoice = {
            customer: "TestCo",
            performances: [{
                playID: "hamlet",
                audience: 35
            }]
        };

        const result = statement(singleTragedyInvoice, plays);
        expect(result).toContain("You earned 5 credits"); // 35 - 30 = 5 créditos
    });

    test('deve calcular corretamente os créditos de volume para comédia', () => {
        const singleComedyInvoice = {
            customer: "TestCo",
            performances: [{
                playID: "as-like",
                audience: 35
            }]
        };

        const result = statement(singleComedyInvoice, plays);
        // 5 créditos base (35 - 30) + 7 créditos bônus (Math.floor(35/5))
        expect(result).toContain("You earned 12 credits");
    });


}); 