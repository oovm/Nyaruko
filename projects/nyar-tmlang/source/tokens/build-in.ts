const build_in_raw = {
    module: [
        'MachineLearning|NyarNetworks',
        'Math.Advance', 'Math.LinearAlgebra', 'Math.Constant'
    ],
    class: [
        'Bin|Oct|Hex|Complex',
        'Polygon|Graph|List|Graphics|Polynomial|Group|Cycle',
        'Tensor',
        'String|Image|Music|Date',
        'Stream|File|URL'
    ],
    operator_name: [
        'add|append'
    ]
}

export const build_in = Object.entries(build_in_raw)
    .reduce((a: any, [k, v]: any) => (a[k] = v.join('|').split('|'), a), {})