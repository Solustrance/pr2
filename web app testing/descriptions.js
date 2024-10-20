function roomDescs(roomId) {
    let occupied;
    const roomData = {
        room1: 
        room2: "Teacher: Jae.",
        room3: "Teacher: Vasilli",
        room4: "Teacher: Carmelo",
        room5: "Teacher: Gavhynne"
    };
    document.getElementById('description-content').innerHTML = roomData[roomId];
    document.getElementById('description-modal').style.display = 'block';
}