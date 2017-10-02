function ClozeCard(text,cloze){
	this.cloze = cloze;
	this.partialText = text.replace(cloze, '...');
	this.fullText = text;

	if (!text.includes(cloze)){
		console.log("This is an error");
	}
}

module.exports = ClozeCard;