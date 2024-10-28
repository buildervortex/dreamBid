using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace backend.Migrations
{
    /// <inheritdoc />
    public partial class makethepaypalTransactionIdnullableintransactions : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "a9430e6f-b32c-4f1f-bd5d-3db25749dfc6");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "b4bf9083-8e5d-4f46-bac6-39d8cf73ec51");

            migrationBuilder.AlterColumn<string>(
                name: "PaypalTransactionId",
                table: "Transaction",
                type: "longtext",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "longtext")
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "500224bc-1805-494a-a3e9-c4b8c38192c4", null, "User", "USER" },
                    { "ebdfdbee-d793-4aa0-8fe2-ac5741964fe2", null, "Admin", "ADMIN" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "500224bc-1805-494a-a3e9-c4b8c38192c4");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "ebdfdbee-d793-4aa0-8fe2-ac5741964fe2");

            migrationBuilder.UpdateData(
                table: "Transaction",
                keyColumn: "PaypalTransactionId",
                keyValue: null,
                column: "PaypalTransactionId",
                value: "");

            migrationBuilder.AlterColumn<string>(
                name: "PaypalTransactionId",
                table: "Transaction",
                type: "longtext",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "longtext",
                oldNullable: true)
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "a9430e6f-b32c-4f1f-bd5d-3db25749dfc6", null, "Admin", "ADMIN" },
                    { "b4bf9083-8e5d-4f46-bac6-39d8cf73ec51", null, "User", "USER" }
                });
        }
    }
}
