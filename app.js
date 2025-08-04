import xlsx from "xlsx";
import readline from "node:readline";
import path from "path";

// user inputs the path to the Excel file
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Please enter the path to the Excel file: ", (filePath) => {
  rl.close();

  try {
    // Process the Excel file after getting the path
    const workbook = xlsx.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const workSheet = workbook.Sheets[sheetName];
    const data = xlsx.utils.sheet_to_json(workSheet);

    const withBonus = data.map((employee) => {
      const salary = employee.AnnualSalary;
      let bonus = 0;
      let bonusPercentage = 0;

      if (salary < 50000) {
        bonus = salary * 0.05;
        bonusPercentage = 5;
      } else if (salary <= 100000) {
        bonus = salary * 0.07;
        bonusPercentage = 7;
      } else {
        bonus = salary * 0.1;
        bonusPercentage = 10;
      }

      return { ...employee, Bonus: bonus, BonusPercentage: bonusPercentage };
    });

    // Create a new workbook with the bonus data
    const newSheet = xlsx.utils.json_to_sheet(withBonus);
    const newWorkBook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(newWorkBook, newSheet, "Employees with Bonus");

    // Save the new workbook
    const outputPath = path.join(
      path.dirname(filePath),
      "employee_data_with_bonus.xlsx"
    );
    xlsx.writeFile(newWorkBook, outputPath);

    console.log(`✅ Success! File saved to: ${outputPath}`);
  } catch (error) {
    console.error("❌ Error processing the Excel file:", error.message);
  }
});
