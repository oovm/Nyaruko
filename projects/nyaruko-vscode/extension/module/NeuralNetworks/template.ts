const Template = [
    {
        prefix: 'NeuralNetwork Layer Template',
        body: [
            'Template Layer ${1:name}() {',
            '\t%%% doc',
            '\t@param: ',
            '\t@return: Class ${1:name} Extends NeuralNetwork.Layer',
            '\t%%%',
            '\t${0:defitions}',
            '\tInputs {',
            '\t\tInput::Tensor<[], Real32>',
            '\t}',
            '\tOutputs {',
            '\t\tOutput::Tensor<[], Real32>',
            '\t}',
            '\tLayer {',
            '\t\tInput > Output',
            '\t}',
            '}'
        ],
        description: 'Template tp_name sym_name {}'
    },
    {
        prefix: 'NeuralNetwork Graph Template',
        body: [
            'Template Graph ${1:name}() {',
            '\t%%% doc',
            '\t@param: ',
            '\t@return: Class ${1:name} Extends NeuralNetwork.Graph',
            '\t%%%',
            '\t${0:defitions}',
            '\tInputs {',
            '\t\tInput::Tensor<[], Real32>',
            '\t}',
            '\tOutputs {',
            '\t\tOutput::Tensor<[], Real32>',
            '\t}',
            '\tGraph {',
            '\t\tInput > Output',
            '\t}',
            '}'
        ],
        description: 'Template tp_name sym_name {}'
    }
]