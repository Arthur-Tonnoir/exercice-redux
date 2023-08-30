const initialState = {
    pointA: 0,
    pointB: 0,
    playing: false,
    winner: null,
    player: null
}

const setPlaying = (playing) => ({ //
    type: "setPlaying",
    payload: playing,
  });

export const restartGame = () => ({ type: "restart" });

export const add_point = (ammount, joueur) => ({
    type: "pointScored",
    payload: ammount,
    player: joueur,
});
  
// export function autoplay(store) {
// const isPlaying = store.getState().playing;
// if (isPlaying || store.getState().winner) {
//     // Déjà entrain de jouer, on ne fait rien
//     return;
// }
// // on indique que la partie est en cours
// store.dispatch(setPlaying(true));
// playNextPoint();
// function playNextPoint() {
//     if (store.getState().playing === false) {
//     return;
//     }
//     const time = 1000 + Math.floor(Math.random() * 2000);
//     window.setTimeout(() => {
//     if (store.getState().playing === false) {
//         return;
//     }
//     // si oui on marque un point aléatoire
//     const pointWinner = Math.random() > 0.5 ? "player1" : "player2";
//     store.dispatch(add_point(pointWinner));
//     if (store.getState().winner) {
//         store.dispatch(setPlaying(false));
//         return;
//     }
//     playNextPoint();
//     }, time);
// }
// }
  
const reducer = (state = initialState, action)=> {
//     if (action.type === "restart") {
//     return (state, (draft) => {
//     // si le match est terminé, on ajoute un élément à l'historique
//     if (draft.winner) {
//         draft.history.push({
//         point: draft.point,
//         winner: draft.winner,
//         });
//     }
//     // puis on reset les autres propriétés
//     draft.point = 0;
//     draft.winner = null;
//     draft.playing = false;
//     });
//     }
//     if (action.type === "setPlaying") {
//     return (state, (draft) => {
//     draft.playing = action.payload;
//     });
//         }
// if (action.type === "pointScored") {
//     const player = action.payload.player;
//     const otherPlayer = player === "player1" ? "player2" : "player1";
//     if (state.winner) {
//     // On ne peut pas marquer de point si le set est terminé
//     return state;
//     }
//     return (state, (draft) => {
//     const currentPlayerScore = draft[player];
//     if (currentPlayerScore <= 15) {
//         // 0 ou 15 => on ajoute 15
//         draft[player] += 15;
//         return;
//     }
//     if (currentPlayerScore === 30) {
//         draft[player] = 40;
//         return;
//     }
//     if (currentPlayerScore === 40) {
//         if (draft[otherPlayer] !== 40) {
//         // Le joueur à gagné
//         draft.winner = player;
//         return;
//         }
//         if (draft.advantage === player) {
//         // Le joueur à gagné
//         draft.winner = player;
//         return;
//         }
//     }
//     });
// }

switch (action.type) {
    case 'pointScored':
        if(action.player === 'A'){
            return {
                ...state,
                pointA: state.pointA + action.payload
              }
        }
        if(action.player === 'B'){
            return {
            ...state,
            pointB: state.pointB + action.payload
            }
        }
        break;
    default:
      return state;
    }
}  

export default reducer;