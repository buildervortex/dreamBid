using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace backend.Migrations
{
    /// <inheritdoc />
    public partial class setthebidisoptionalforatransaction : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "500224bc-1805-494a-a3e9-c4b8c38192c4");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "ebdfdbee-d793-4aa0-8fe2-ac5741964fe2");

            migrationBuilder.AlterColumn<int>(
                name: "BidId",
                table: "Transaction",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "22e75645-6fc3-4ee3-811b-e4b3e4c67880", null, "User", "USER" },
                    { "9b36b1ff-d74e-408d-b85a-b916bf039110", null, "Admin", "ADMIN" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "22e75645-6fc3-4ee3-811b-e4b3e4c67880");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "9b36b1ff-d74e-408d-b85a-b916bf039110");

            migrationBuilder.AlterColumn<int>(
                name: "BidId",
                table: "Transaction",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "500224bc-1805-494a-a3e9-c4b8c38192c4", null, "User", "USER" },
                    { "ebdfdbee-d793-4aa0-8fe2-ac5741964fe2", null, "Admin", "ADMIN" }
                });
        }
    }
}
