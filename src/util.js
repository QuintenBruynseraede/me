
export function isValidInputCharacter(char) {
    // Matches all nomal keys I see on this keyboard
    return char.length === 1 && char.match(/[a-z0-9 \-_,."';!@#$%^&*(){}[\]\\|<>?/~`+=±§]/i);
}