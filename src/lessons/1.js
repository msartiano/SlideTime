const slides = [
    {
        title: 'Create a simple react App - TicTacToe',
        criteria: [
            'Should have a **git** repository',
            'Should start correctly and visualise the initial page',
            'Should show the text \'*Welcome to TicTacToe*\''
        ]
    },
    {
        title: 'Add a TableView to your App',
        criteria: [
            'Should be a Class Component',
            'Should extend from React.Component',
            'Should return a placeholder text',
            'Should be exported successfully',
            'Should be imported in our main App, and the App should visualise the title and the `TableView` Component'
        ]
    },
    {
        title: 'Add a TableCell Component to your App',
        criteria: [
            'Should extend React.Component',
            'Should accept a prop called symbol and display it',
            'Should be imported in TableView, for a total of 9 TableCells in TableView',
            'Should be visualised in the overall App',
            '[Bonus] Should be grouped 3x3 in TableView, you can use a mix of <span> and <div>'
        ]
    },
    {
        title: 'create TableView initial game state',
        criteria: [
            'Should have a state variable holding current player info: `currentPlayer=\'X\'`',
            'Should have a state array holding each Cell current symbol: `choices=[0, 0, 0, 0, 0, 0, 0, 0, 0]`, initialised to 0',
            'Should have a `nextPlayer` function that switches the currentPlayer to O if it is X and viceversa',
            'Each `TableCell` should receive the choice value as a prop, even when it is defaulted to 0, so each cell initially should display 0',
        ]
    },
    {
        title: 'create TableView logic to handle onChangeSymbol callback and call it on TableCell',
        criteria: [

            '`TableView` should have a `changeSymbolForCell` function that updates `this.state.choices[x] with the current symbol`',
            '`TableCell` should receive the `changeSymbolForCell` function as a prop',
            '`TableCell` should receive the `cellIndex` as a prop',
            '`TableCell` should render the symbol or, if not yet set, a button that sets the symbol for the current player',
            '`TableCell`, when clicking the button to set the symbol, should call `changeSymbolForCell` and pass the current `cellIndex`',
        ]
    },
    {
        title: 'Detect when there\'s a triplet and a player won',
        criteria: [
            'Should detect triplets in horizontal rows',
            'Should detect triplets in vertical columns',
            'Should detect triplets in oblique combinations',
            'Should say \'Player X/O Wins!\' if at least 1 triplet is found'
        ]
    },
    {
        title: 'Create a =Reset Game= Button in TableView',
        criteria: [
            'Should clear all the choices',
            'Should reset the default choice to X',
        ]
    }
];

export default slides;