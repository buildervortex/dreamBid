using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace backend.Migrations
{
    /// <inheritdoc />
    public partial class changetheimagecontentlenghttolong : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "13cdc34c-65fa-4a55-b08e-b5c5db22c062");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "907f9693-2f1f-4614-931b-53c1a90f014d");

            migrationBuilder.AlterColumn<long>(
                name: "Length",
                table: "Images",
                type: "bigint",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "73e10db5-3177-483d-9ede-30d9703cbd55", null, "User", "USER" },
                    { "826e629f-a6ba-4a43-a68a-5162ef378391", null, "Admin", "ADMIN" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "73e10db5-3177-483d-9ede-30d9703cbd55");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "826e629f-a6ba-4a43-a68a-5162ef378391");

            migrationBuilder.AlterColumn<int>(
                name: "Length",
                table: "Images",
                type: "int",
                nullable: false,
                oldClrType: typeof(long),
                oldType: "bigint");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "13cdc34c-65fa-4a55-b08e-b5c5db22c062", null, "User", "USER" },
                    { "907f9693-2f1f-4614-931b-53c1a90f014d", null, "Admin", "ADMIN" }
                });
        }
    }
}
