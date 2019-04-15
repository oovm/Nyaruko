const functions_raw = {
    math_basic: [
        'add|minus|times|divide|mod',
        'sin|cos|tan|cot|sec|csc',
        'arcsin|arccos|arctan|arccot|arcsec|arccsc',
        'sqrt|power|surd|exp|log',
        'mod|remainder|quotient',
        'abs|arg|real|imaginary|conjugate',
        'lcm|gcd|gcd_extand,'
    ],
    math_symbolic: [
        'integrate|integrateAsymptotic',
        'sum|sumAsymptotic',
        'solveAlgebra|solveDifferential|solveRecursive'
    ],
    math_linear: [
        'tr'
    ],
    loop_basic: [
        'range',
        'table', 'repeat'
    ],
    io_basic: [
        'print',
        'import', 'export',
        'import_string', 'exportString',
        'importBype', 'exportByte'
    ]
}

export const functions = Object.entries(functions_raw)
    .reduce((a: any, [k, v]: any) => (a[k] = v.join('|').split('|'), a), {})
