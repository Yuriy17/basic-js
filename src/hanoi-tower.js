module.exports = function calculateHanoi( disksNumber, turnsSpeed) {
    if ( disksNumber == null || turnsSpeed == null){
        return false;
    }
    var turn = Math.pow(2, disksNumber) - 1;
    var seconds = turn/(turnsSpeed/3600);
    var obj = {turns: turn, seconds: seconds};
    return obj;
}