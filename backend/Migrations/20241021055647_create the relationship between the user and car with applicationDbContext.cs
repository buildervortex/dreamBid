using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace backend.Migrations
{
    /// <inheritdoc />
    public partial class createtherelationshipbetweentheuserandcarwithapplicationDbContext : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "9944f8b2-e4c0-477e-b905-6f9509b0b722");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "c92f2931-c3ec-475e-a426-ae4ed0d70e37");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "38caa32f-acc3-4118-b380-96fdf4a98945", null, "Admin", "ADMIN" },
                    { "99d739ad-aa94-4b9f-a146-4f5ce4a0c44e", null, "User", "USER" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "38caa32f-acc3-4118-b380-96fdf4a98945");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "99d739ad-aa94-4b9f-a146-4f5ce4a0c44e");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "9944f8b2-e4c0-477e-b905-6f9509b0b722", null, "User", "USER" },
                    { "c92f2931-c3ec-475e-a426-ae4ed0d70e37", null, "Admin", "ADMIN" }
                });
        }
    }
}
