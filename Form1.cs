namespace calculator
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        
        int num1;
        int num2;
        string option;
        int result;

        private void button1_Click(object sender, EventArgs e)
        {
            textTotal.Text = textTotal.Text + "1";
        }

        private void Form1_Load(object sender, EventArgs e)
        {

        }

        private void textTotal_TextChanged(object sender, EventArgs e)
        {

        }

        private void button6_Click(object sender, EventArgs e)
        {
            textTotal.Text = textTotal.Text + "6";
        }

        private void button14_Click(object sender, EventArgs e)
        {
            option = "+";
            num1 = int.Parse(textTotal.Text);
            textTotal.Clear();
        }

        private void button2_Click(object sender, EventArgs e)
        {
            textTotal.Text = textTotal.Text + "2";
        }

        private void button3_Click(object sender, EventArgs e)
        {
            textTotal.Text = textTotal.Text + "3";
        }

        private void button4_Click(object sender, EventArgs e)
        {
            textTotal.Text = textTotal.Text + "4";
        }

        private void button5_Click(object sender, EventArgs e)
        {
            textTotal.Text = textTotal.Text + "5";
        }

        private void button7_Click(object sender, EventArgs e)
        {
            textTotal.Text = textTotal.Text + "7";
        }

        private void button8_Click(object sender, EventArgs e)
        {
            textTotal.Text = textTotal.Text + "8";
        }

        private void button9_Click(object sender, EventArgs e)
        {
            textTotal.Text = textTotal.Text + "9";
        }

        private void button10_Click(object sender, EventArgs e)
        {
            textTotal.Text = textTotal.Text + "0";
        }

        private void button11_Click(object sender, EventArgs e)
        {
            option = "*";
            num1 = int.Parse(textTotal.Text);
            textTotal.Clear();
        }

        private void button12_Click(object sender, EventArgs e)
        {
            option = "/";
            num1 = int.Parse(textTotal.Text);
            textTotal.Clear();
        }

        private void button13_Click(object sender, EventArgs e)
        {
            option = "-";
            num1 = int.Parse(textTotal.Text);
            textTotal.Clear();
        }

        private void button16_Click(object sender, EventArgs e)
        {
            num2 = int.Parse(textTotal.Text);
            if (option.Equals("+"))
                result = num1 + num2;
            if (option.Equals("-"))
                result = num1 - num2;
           
                if (option.Equals("/"))
                {
                    if (num2 != 0) // Check for division by zero
                        result = num1 / num2;
                    else
                        MessageBox.Show("Error: Division by zero is not allowed.");
                }
            if (option.Equals("*"))
                result = num1 * num2;

            textTotal.Text = result.ToString();
            result = num1 + num2;
            if (option.Equals("*")) 
                result = num1 * num2;

            textTotal.Text = result.ToString();

        }

        private void button15_Click(object sender, EventArgs e)
        {
            textTotal.Clear();
            result = 0;
            num1 = 0;
            num2 = 0;



        }
    }
}