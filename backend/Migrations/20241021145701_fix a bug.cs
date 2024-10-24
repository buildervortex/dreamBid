using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace backend.Migrations
{
    /// <inheritdoc />
    public partial class fixabug : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "38caa32f-acc3-4118-b380-96fdf4a98945");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "99d739ad-aa94-4b9f-a146-4f5ce4a0c44e");

            migrationBuilder.AlterColumn<int>(
                name: "Year",
                table: "Cars",
                type: "int",
                nullable: false,
                oldClrType: typeof(short),
                oldType: "smallint");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "07d11f2d-2755-49ec-898f-3ed2af255562", null, "Admin", "ADMIN" },
                    { "d6559f55-1ae3-4344-b8e2-6948d20524c4", null, "User", "USER" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "07d11f2d-2755-49ec-898f-3ed2af255562");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "d6559f55-1ae3-4344-b8e2-6948d20524c4");

            migrationBuilder.AlterColumn<short>(
                name: "Year",
                table: "Cars",
                type: "smallint",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "38caa32f-acc3-4118-b380-96fdf4a98945", null, "Admin", "ADMIN" },
                    { "99d739ad-aa94-4b9f-a146-4f5ce4a0c44e", null, "User", "USER" }
                });
        }
    }
}
