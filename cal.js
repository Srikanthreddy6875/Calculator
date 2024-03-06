let decimalUsed = false;

        function handleButtonClick(value) {
            if (decimalUsed && value === '.') {
                // Do nothing if decimal is already used
                return;
            }
            document.getElementById('display').value += value;
            if (value === '.') {
                decimalUsed = true;
            }
        }

        function handleDelete() {
            let display = document.getElementById('display');
            let currentValue = display.value;
            display.value = currentValue.slice(0, -1);

            // if the deleted character is '.'
            if (currentValue.slice(-1) === '.') {
                decimalUsed = false;
            }
        }

        function handleDecimal() {
            // Allow decimal only if not already used
            if (!decimalUsed) {
                document.getElementById('display').value += '.';
                decimalUsed = true;
            }
        }

        function appendToDisplay(operator) {
            decimalUsed = false;
            document.getElementById('display').value += operator;
        }

        function clearDisplay() {
            document.getElementById('display').value = '';
            decimalUsed = false;
        }

        function calculate() {
            try {
                let result = eval(document.getElementById('display').value);
                document.getElementById('display').value = result;
                decimalUsed = result.toString().includes('.');
            } catch (error) {
                document.getElementById('display').value = 'Error';
            }
        }