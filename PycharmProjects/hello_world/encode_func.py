def encode(password):
    encoded = ''.join(str((int(char) + 3) % 10) for char in password)
    return encoded