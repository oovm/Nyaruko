(* ::Package:: *)

SetDirectory@NotebookDirectory[];


$icon = Block[
	{
		layerCounts = {3, 2, 5, 1},
		graph, vStyle
	},
	graph = GraphUnion @@ MapThread[
		IndexGraph, {
			CompleteGraph /@ Partition[layerCounts, 2, 1],
			FoldList[Plus, 0, layerCounts[[;; -3]]]
		}];
	vStyle = Catenate[Thread /@ Thread[
		TakeList[VertexList[graph], layerCounts] -> ColorData[97] /@ Range@Length[layerCounts]
	]];
	Graph[
		graph,
		GraphLayout -> {"MultipartiteEmbedding", "VertexPartition" -> layerCounts},
		GraphStyle -> "BasicBlack",
		VertexSize -> 0.65,
		VertexStyle -> vStyle,
		ImageSize -> 800
	]
]
Export["NeuralNetwork.svg", $icon, "SVG"]


$icon = Row[{
	Style["\[Aleph]", RGBColor[{128, 0, 64} / 255], FontSize -> 15 * 30, FontFamily -> "Academy Engraved LET"],
	Style[" ", FontSize -> 2 * 30],
	Style["\[Alpha]", RGBColor[{128, 0, 128} / 255], FontSize -> 12 * 30, FontFamily -> "Academy Engraved LET"]
}]
Export["icon.svg", $icon, "SVG"]