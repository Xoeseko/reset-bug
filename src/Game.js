export const TicTacToe = {
    setup: () => ({ cells: Array(9).fill(null) }),

    turn: {
        maxMoves: 1,
    },

    moves: {
        clickCell: (G, ctx, id) => {
            G.cells[id] = ctx.currentPlayer;
        },
        requestResettingMove: (G, ctx, id) => {
            ctx.events.setActivePlayers({
                value: {
                    [ctx.currentPlayer]: 'willReset',
                },
                maxMoves: 1,
                revert: true,
            });
        }
    },

    stages: {
        willReset: {
            moves: {
                doNothing: () => { }
            }
        }
    },
};
