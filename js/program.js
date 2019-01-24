process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
    // metoda .read() ma za zadanie odczytać co użytkownik podał na wejściu
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();

        switch (instruction) {
            case 'operational system':
                process.stdout.write(process.env.OS + "\n");
                break;
            case 'user name':
                process.stdout.write(process.env.USERNAME + "\n");
                break;
            case '/exit':
                process.stdout.write('Quitting app!\n');
                process.exit();
            default:
                process.stdout.write('Possible options: "operational system", "user name" and "/exit"\n');
        }
    }
});