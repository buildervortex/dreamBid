using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace backend.Migrations
{
    /// <inheritdoc />
    public partial class movetheusercompletelytotheimagemodelforsavingprofileimages : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "005b677f-eada-4577-9485-bc05059491df");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "23c9f717-5025-4885-a325-5c58bf47760d");

            migrationBuilder.DropColumn(
                name: "ProfilePicuturePath",
                table: "AspNetUsers");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "892149ee-853c-416a-89c3-827fc4c8cd14", null, "User", "USER" },
                    { "ab1812a5-a5c4-476a-b8f6-d3d48d5914ec", null, "Admin", "ADMIN" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "892149ee-853c-416a-89c3-827fc4c8cd14");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "ab1812a5-a5c4-476a-b8f6-d3d48d5914ec");

            migrationBuilder.AddColumn<string>(
                name: "ProfilePicuturePath",
                table: "AspNetUsers",
                type: "longtext",
                nullable: true)
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "005b677f-eada-4577-9485-bc05059491df", null, "Admin", "ADMIN" },
                    { "23c9f717-5025-4885-a325-5c58bf47760d", null, "User", "USER" }
                });
        }
    }
}
